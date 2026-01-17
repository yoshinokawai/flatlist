const getCurrentTime = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
};

const currentTime = getCurrentTime();

export const notifications = [
    {
        id: 1,
        title: "Bước 1 Xác định nhu cầu khách hàng",
        description: `Vũ Văn Hoàng sắp đến hạn lúc ${currentTime.split(',')[0]} 9:00`,
        time: currentTime,
        type: "check",
        isRead: false,
    },
    {
        id: 2,
        title: "Bạn có khách hàng mới!",
        description: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
        time: currentTime,
        type: "customer",
        isRead: false,
    },
    {
        id: 3,
        title: "Khách hàng được chia sẻ bị trùng",
        description: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
        time: currentTime,
        type: "customer",
        isRead: true,
    },
    {
        id: 4,
        title: "Khách hàng được thêm bị trùng",
        description: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
        time: currentTime,
        type: "customer",
        isRead: true,
    },
    {
        id: 5,
        title: "Công việc sắp đến hạn trong hôm nay",
        description: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
        time: currentTime,
        type: "check",
        isRead: true,
    },
    {
        id: 6,
        title: "Công việc đã quá hạn",
        description: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
        time: currentTime,
        type: "check",
        isRead: true,
    },
];
