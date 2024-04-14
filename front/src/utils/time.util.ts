export const formatTime = (dateNumber: number): string => {
    const today = new Date();
    const date = new Date(dateNumber);
    if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    ) {
        return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    } else {
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    }
};

// export const groupTimestamps = (
//     data: MessageType[]
// ): { [key: string]: MessageType[] } => {
//     const groupedByDate: { [key: string]: MessageType[] } = {};

//     data?.forEach((item) => {
//         const timestamp = new Date(item?.time);
//         const dateString = timestamp?.toISOString().split("T")[0];

//         if (!groupedByDate[dateString]) {
//             groupedByDate[dateString] = [];
//         }

//         groupedByDate[dateString].push(item);
//     });
//     const todaysDate = new Date(Date.now()).toISOString().split("T")[0];
//     groupedByDate[todaysDate]?.forEach((item: MessageType) => {
//         const timestamp = new Date(item?.time);
//         const key = timestamp.toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//         });
//         if (!groupedByDate[key]) {
//             groupedByDate[key] = [];
//         }

//         groupedByDate[key].push(item);
//     });
//     delete groupedByDate[todaysDate];

//     return groupedByDate;
// };
