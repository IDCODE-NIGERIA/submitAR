"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { FiSearch } from "react-icons/fi";

const dummyOrders = [
  { id: "CSN-240514", customer: "John Doe", contact: "09036245423", location: "Wuse 2", service: "Graphics", amount: "₦10,000", status: "Pending", date: "26 May" },
  { id: "CSN-240515", customer: "John Doe", contact: "09036245423", location: "Kubwa", service: "Photocopying", amount: "₦7,000", status: "Pending", date: "26 May" },
  { id: "CSN-240516", customer: "John Doe", contact: "09036245423", location: "Lugbe", service: "Photocopying", amount: "₦2,000", status: "Completed", date: "26 May" },
  { id: "CSN-240517", customer: "John Doe", contact: "09036245423", location: "Garki", service: "Printing", amount: "₦3,000", status: "Delivered", date: "26 May" },
  { id: "CSN-240518", customer: "John Doe", contact: "09036245423", location: "Jabi", service: "Binding", amount: "₦15,000", status: "Delivered", date: "26 May" },
  { id: "CSN-240519", customer: "John Doe", contact: "09036245423", location: "Lugbe", service: "Binding", amount: "₦11,000", status: "In Progress", date: "26 May" },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Total Order");

  const stats = [
    { label: "Pending", value: 32, color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
    { label: "In Progress", value: 45, color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { label: "Completed", value: 40, color: "bg-green-100 text-green-800 hover:bg-green-200" },
    { label: "In Transit", value: 20, color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
    { label: "Delivered", value: 20, color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200" },
    { label: "Cancelled", value: 8, color: "bg-red-100 text-red-800 hover:bg-red-200" },
    { label: "Total Order", value: 125, color: "bg-gray-900 text-white" },
  ];

  const filteredOrders = dummyOrders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.location.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === "Total Order") return matchesSearch;
    return matchesSearch && order.status === activeFilter;
  });

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50 pt-6 pb-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">Orders</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                onClick={() => setActiveFilter(stat.label)}
                className={`rounded-2xl p-6 shadow-sm cursor-pointer transition-all active:scale-95 ${
                  stat.color
                } ${
                  activeFilter === stat.label 
                    ? "ring-2 ring-offset-2 ring-blue-600 shadow-md scale-105" 
                    : "hover:shadow"
                }`}
              >
                <p className="text-sm font-medium opacity-90">{stat.label}</p>
                <p className="text-4xl font-bold mt-3 tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-3xl shadow border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                {activeFilter === "Total Order" ? "All Orders" : `${activeFilter} Orders`}
              </h2>

              <div className="relative w-full md:w-96">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search order ID, Name, Location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 text-gray-900 placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Order ID</th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Customer</th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Contact</th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Location</th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Service</th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Date</th>
                    <th className="text-left py-5 px-6 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-800">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-medium text-gray-900">{order.id}</td>
                        <td className="px-6 py-5">{order.customer}</td>
                        <td className="px-6 py-5 font-medium">{order.contact}</td>
                        <td className="px-6 py-5">{order.location}</td>
                        <td className="px-6 py-5">{order.service}</td>
                        <td className="px-6 py-5 font-semibold text-gray-900">{order.amount}</td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex px-4 py-1.5 text-sm font-medium rounded-full ${
                            order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                            order.status === "Completed" || order.status === "Delivered" ? "bg-green-100 text-green-800" :
                            "bg-blue-100 text-blue-800"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-gray-600">{order.date}</td>
                        <td className="px-6 py-5">
                          <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-xl transition-colors"
                            // onClick={() => viewOrderDetails(order.id)}  ← Will be functional later
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={9} className="text-center py-16 text-gray-500">
                        No orders found for this filter
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}