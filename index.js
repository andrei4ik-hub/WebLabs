const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes');
const routeRoutes = require('./routes/routeRoutes');
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');

app.use(express.json());
app.use('/auth', authRoutes); // Маршруты для аутентификации
app.use('/user', authenticateToken, userRoutes); // Защита маршрутов пользователей
app.use('/trip', authenticateToken, tripRoutes); // Защита маршрутов поездок
app.use('/route', authenticateToken, routeRoutes); // Защита маршрутов маршрутов

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
