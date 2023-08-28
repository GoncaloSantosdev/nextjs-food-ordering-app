"use client";
import { useRouter } from "next/navigation";
// Auth
import { useSession } from "next-auth/react";
// React Query
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// TS Types
import { OrderType } from "@/types/types";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  if (isLoading || status === "loading") return "Loading...";

  const updateOrderHandler = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
    toast.success("Order status updated");
  };

  return (
    <>
      <section className="mt-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    OrderId
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Products
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item: OrderType) => (
                  <tr className="bg-white border-b" key={item.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4">
                      {item.createdAt.toString().slice(0, 10)}
                    </td>
                    <td className="px-6 py-4">{item.products[0].title}</td>
                    <td className="px-6 py-4">${item?.price}</td>
                    <td className="px-6 py-4">
                      {session?.user.isAdmin ? (
                        <form
                          className="flex items-center space-x-4"
                          onSubmit={(e) => updateOrderHandler(e, item.id)}
                        >
                          <input
                            placeholder={item.status}
                            className={`p-2 rounded border text-black ${
                              item.status === "delivered"
                                ? "border-green-600"
                                : "border-red-600"
                            }`}
                          />

                          <button
                            type="submit"
                            className="text-black flex items-center underline"
                          >
                            Update
                          </button>
                        </form>
                      ) : (
                        <td></td>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrdersPage;
