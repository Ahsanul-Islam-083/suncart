const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-6">
            <div className="bg-white rounded-3xl shadow-xl flex overflow-hidden max-w-5xl w-full my-4 animate-pulse">

                {/* LEFT — Form Skeleton */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col gap-5">
                    {/* Title */}
                    <div className="h-7 w-32 rounded-lg bg-gray-200" />
                    {/* Subtitle */}
                    <div className="h-4 w-48 rounded bg-gray-200" />

                    {/* Fields */}
                    <div className="flex flex-col gap-4 mt-2">
                        <div className="flex flex-col gap-1.5">
                            <div className="h-4 w-20 rounded bg-gray-200" />
                            <div className="h-10 w-full rounded-xl bg-gray-200" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="h-4 w-20 rounded bg-gray-200" />
                            <div className="h-10 w-full rounded-xl bg-gray-200" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="h-4 w-20 rounded bg-gray-200" />
                            <div className="h-10 w-full rounded-xl bg-gray-200" />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-2">
                        <div className="h-10 w-28 rounded-full bg-gray-200" />
                        <div className="h-10 w-28 rounded-full bg-gray-200" />
                    </div>

                    {/* Divider */}
                    <div className="h-4 w-full rounded bg-gray-200" />

                    {/* Google Button */}
                    <div className="h-10 w-full rounded-full bg-gray-200" />
                </div>

                {/* RIGHT — Image Skeleton */}
                <div className="hidden md:block w-1/2 p-4">
                    <div className="h-full w-full min-h-125 rounded-2xl bg-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default Loading;