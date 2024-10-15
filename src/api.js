const TOTAL_SEATS = 5; //  Total available seats إجمالي المقاعد المتاحة 

export const fetchAvailableTimes = async (date) => {
  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.getDay(); //  Retrieve the day of the week number (0-6) استرجاع رقم اليوم من الأسبوع (0-6)

  // استرجاع الحجوزات الموجودة في نفس اليوم  Retrieve reservations made on the same day
  const existingReservations = await fetchExistingReservations(date);
  
  // حساب عدد المقاعد المحجوزة Calculate the number of reserved seats
  const reservedSeats = existingReservations.length; //You can change this to reflect the actual number of seats reserved if there is room to enter the number of seats reserved. يمكنك تغيير هذا ليعكس عدد المقاعد المحجوزة الفعلية إذا كان هناك مجال لإدخال عدد المقاعد المحجوزة.
  
  // حساب عدد المقاعد المتبقية Calculate the number of remaining seats
  const availableSeats = TOTAL_SEATS - reservedSeats;
  
  //Simulate data retrieval based on day (less times on weekends) محاكاة استرجاع البيانات بناءً على اليوم (أوقات أقل في عطلة نهاية الأسبوع)
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      let availableTimes;

      // إذا كان اليوم هو السبت أو الأحد (عطلة نهاية الأسبوع)
      if (dayOfWeek === 6 || dayOfWeek === 0) {
        availableTimes = ['12:00', '13:00', '14:00', '15:00', '16:00']; // أوقات أقل متاحة
      } else {
        // أيام الأسبوع - أوقات أكثر
        availableTimes = ['10:00', '11:00','12:00', '13:00', '14:00', '15:00', '16:00', '18:00', '19:00', '20:00', '21:00', ];
      }

      // إزالة الأوقات التي تم حجزها بالكامل
      const filteredTimes = availableTimes.filter(time => {
        // تحقق من عدد الحجوزات في هذا الوقت
        const reservationsAtTime = existingReservations.filter(reservation => reservation.time === time);
        
        // إذا كانت المقاعد المتاحة لهذا الوقت أقل من أو تساوي 0، يجب استبعاد هذا الوقت
        return reservationsAtTime.length < availableSeats; 
      });

      resolve(filteredTimes); // إرجاع الأوقات المتاحة
    }, 1000); // تأخير 1 ثانية لمحاكاة الاتصال بالخادم
  });

  return response; // إرجاع الأوقات المتاحة
};

// دالة محاكاة أخرى لاسترجاع الحجوزات الموجودة في ذلك اليوم
export const fetchExistingReservations = async (date) => {
  // محاكاة بيانات الحجوزات الموجودة في ذلك اليوم
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      const existingReservations = [
        { time: '12:00', name: 'احمد' },
        { time: '16:00', name: 'عزيز' },
        { time: '10:00', name: 'رشيد' },
        { time: '13:00', name: 'سعد' },
        // يمكنك إضافة حجوزات أخرى هنا
      ];

      resolve(existingReservations); // إرجاع الحجوزات
    }, 1000);
  });

  return response; // إرجاع الحجوزات الموجودة
};
