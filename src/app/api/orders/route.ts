import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Fetch all ORDERS
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session?.user?.isAdmin) {
        const orders = await prisma.order.findMany();

        return new NextResponse(JSON.stringify(orders), { status: 200 });
      } else {
        const orders = await prisma.order.findMany({
          where: {
            userEmail: session.user.email!,
          },
        });

        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
    } catch (err) {}
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated" }),
      { status: 401 }
    );
  }
};
