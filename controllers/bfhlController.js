const FULL_NAME = "john_doe";
const DOB = "17091999";
const EMAIL = "john@xyz.com";
const ROLL_NO = "ABCD123";


exports.handlePost = (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid request format. Expecting { data: [...] }"
      });
    }


    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;


    data.forEach(item => {
      if (/^\d+$/.test(item)) {
        let num = parseInt(item);
        if (num % 2 === 0) even_numbers.push(item);
        else odd_numbers.push(item);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });


    
    let concat_string = alphabets.join("").split("").reverse()
      .map((ch, idx) => idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())
      .join("");
    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NO,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });
  } catch (err) {
    res.status(500).json({ is_success: false, message: err.message });
  }
};