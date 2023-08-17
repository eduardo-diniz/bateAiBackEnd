const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); 
const companyRoutes = require('./routes/companyRoutes'); 
const departmentRoutes  = require('./routes/departmentRoutes'); 
const timeSheetRoutes = require('./routes/timeSheetRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/', userRoutes);
app.use('/', companyRoutes); 
app.use('/', departmentRoutes); 
app.use('/', timeSheetRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
