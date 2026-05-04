const Loading = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 animate-pulse">

                {/* Left — Image Skeleton */}
                <div className="w-full aspect-square rounded-2xl bg-gray-200" />

                {/* Right — Details Skeleton */}
                <div className="flex flex-col gap-5">
                    {/* Chips */}
                    <div className="flex gap-2">
                        <div className="h-6 w-20 rounded-full bg-gray-200" />
                        <div className="h-6 w-20 rounded-full bg-gray-200" />
                    </div>
                    {/* Title */}
                    <div className="h-8 w-3/4 rounded-lg bg-gray-200" />
                    {/* Rating */}
                    <div className="h-5 w-24 rounded-lg bg-gray-200" />
                    {/* Price */}
                    <div className="flex gap-3 items-center">
                        <div className="h-8 w-20 rounded-lg bg-gray-200" />
                        <div className="h-5 w-16 rounded-lg bg-gray-200" />
                        <div className="h-6 w-16 rounded-full bg-gray-200" />
                    </div>
                    {/* Divider */}
                    <div className="h-px w-full bg-gray-200" />
                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <div className="h-4 w-full rounded bg-gray-200" />
                        <div className="h-4 w-full rounded bg-gray-200" />
                        <div className="h-4 w-2/3 rounded bg-gray-200" />
                    </div>
                    {/* Stock */}
                    <div className="h-4 w-28 rounded bg-gray-200" />
                    {/* Divider */}
                    <div className="h-px w-full bg-gray-200" />
                    {/* Buttons */}
                    <div className="flex gap-3">
                        <div className="flex-1 h-11 rounded-full bg-gray-200" />
                        <div className="flex-1 h-11 rounded-full bg-gray-200" />
                        <div className="h-11 w-11 rounded-full bg-gray-200" />
                    </div>
                    {/* Perks */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-16 rounded-xl bg-gray-200" />
                        <div className="h-16 rounded-xl bg-gray-200" />
                        <div className="h-16 rounded-xl bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;