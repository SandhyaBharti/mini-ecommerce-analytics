const products = [
    { name: "Kaju Katli", stock: 20, sold: 50},
    { name: "Badam Sweet", stock: 30, sold: 80},
    { name: "Pista Roll", stock: 15, sold: 90},
];

const feedbacks =[
    { rating: 5, message: "Amazing taste"},
    { rating: 4, message: "Good packaging"},
    { rating: 2, message: "Too sweet"},
];

// Inventory Analytics
export const getInventoryAnalytics = (req, res) => {
    const lowStock = products.filter(p => p.stock < 10);
    const totalSold = products.reduce((acc, p) => acc + p.sold, 0);

    res.json({
        totalProducts: products.length,
        totalSold,
        lowStockItems: lowStock
    });
};

//Feedback Analytics
export const getFeedbackAnalytics = (req, res) => {
    const avgRating = 
    feedbacks.reduce((acc, f) => acc + f.rating, 0) / feedbacks.length;

    res,json({
        totalFeedbacks: feedbacks.length,
        averageRating: avgRating.toFixed(1),
        feedbacks
    });
};