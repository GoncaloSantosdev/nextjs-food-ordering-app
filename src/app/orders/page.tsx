"use client";
import { useRouter } from "next/navigation";
// Auth
import { useSession } from "next-auth/react";
// React Query
import { useQuery } from "@tanstack/react-query";
// TS Types
import { OrderType } from "@/types/types";

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

  if (isLoading || status === "loading") return "Loading...";

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
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </a>
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
