// // 1. LocalStorage-ə "username" açarı ilə ad yazın
// localStorage.setItem("username", "Akif");




// 2. LocalStorage-dən "username" dəyərini oxuyun və console-a çıxarın
// const username = localStorage.getItem("username");
// console.log(username);



// 3. LocalStorage-ə bir number yazın və oxuyub tipini yoxlayın
// localStorage.setItem("age", 25);
// const age = localStorage.getItem("age");
// console.log(age);          
// console.log(typeof age);  





// 4. Obyekti LocalStorage-də saxlayın
// const user = { name: "Aysel", age: 22 };

// localStorage.setItem("user", JSON.stringify(user));

// 5. Obyekti oxuyub object formasına çevirin
// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser);
// console.log(typeof storedUser); // object

// 6. LocalStorage-də "isLogged" adlı açar yaradın (true / false)
// localStorage.setItem("isLogged", JSON.stringify(true));

// 7. "isLogged" true-dursa "Welcome" yazdırın
// const isLogged = JSON.parse(localStorage.getItem("isLogged"));

// if (isLogged === true) {
//   console.log("Welcome");
// }

// 8. LocalStorage-dən istənilən bir açarı silin
// localStorage.removeItem("age");

// 9. LocalStorage-də neçə məlumat olduğunu tapın
// console.log(localStorage.length);





// 10. LocalStorage-dəki bütün məlumatları silin
// localStorage.clear();