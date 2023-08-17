const bcrypt = require('bcrypt');

const storedHashedPassword ="$2b$10$uZpyh1FI4PPj/GzQ/WaSf.vDEnt/LWcCvNg./dmKNgXUJ.q55yKru";
const providedPassword = "";
(async () => {
    try {
      const passwordMatch = await bcrypt.compare(providedPassword, storedHashedPassword);
      console.log("Passwords match:", passwordMatch);
    } catch (error) {
      console.error(error);
    }
})();