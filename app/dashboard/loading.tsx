export default function LoadingDashboard() {
  // You can add any UI inside Loading, including a Skeleton.
//   return <LoadingSkeleton />
  return (
    <div className="bg-gray-400 align-middle w-1/3 mt-20 rounded-4xl mx-auto h-[150px] flex items-center justify-center animate-fade-in">
        <div className="w-1/3 h-[150px] bg-amber-500 inside-animate rounded-2xl"></div>
    </div>
  )
}