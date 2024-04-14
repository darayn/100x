export const RevenueCard = ({
    title,
    orderCount,
    amount,
    count
}) => {
    return <div className="bg-white rounded shadow-md p-4">
        <div className="text-grey-700">
            {title}
            ?
        </div>
        <div className="flex justify-between">
            <div>
                ₹ {amount}
            </div>
            {orderCount ?
                <div>
                    <div className="flex">
                        <div className="text-blue-700 cursor-pointer underline">
                            {orderCount} order(s)
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div> : null
            }
        </div>
    </div>
}