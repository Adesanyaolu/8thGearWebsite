import React, { useState } from "react";

// export const Lad = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     email: "",
//   });

//   const Handle = (e) => {
//     e.preventDefault();
//     console.log("firstName: " + form.firstName);
//     console.log("email: " + form.email);
//   };
//   return (
//     <article>
//       <form onSubmit={Handle}>
//         <div className="form-control">
//           <label htmlFor="firstName">Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={form.firstName}
//             onChange={(e) => setForm({ ...form, firstName: e.target.value })}
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//         </div>
//         <input type="submit" value="submit"></input>
//       </form>
//     </article>
// import logo from "../assets/images/logo.png";
// import { SubmitFormBtn } from "../components/Buttons/ContactBtn";

// JoinTheStudioForm

// export const JoinTheStudioForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [people, setPeople] = useState([]);

//   const Handle = (e) => {
//     e.preventDefault();
//     if (name && email && phoneNumber && message) {
//       const person = { name, email, phoneNumber, message };
//       console.log(person);
//       setPeople((people) => {
//         return [...people, person];
//       });
//       setName("");
//       setEmail("");
//       setPhoneNumber("");
//       setMessage("");
//       setPeople("");
//     } else {
//       alert("empty values");
//     }
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="prop"
//         data-bs-toggle="modal"
//         data-bs-target="#staticBackdrop"
//       >
//         Join The Studio
//       </button>

//       <div
//         className="modal fade"
//         id="staticBackdrop"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabindex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-md">
//           <div className="modal-content">
//             <div className="modal-header m-2">
//               <img
//                 src={logo}
//                 width={40}
//                 className=""
//                 id="staticBackdropLabel"
//               />
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={Handle}>
//                 <div className="background">
//                   <h4 className=" request mb-4">Join The Studio</h4>

//                   <div className="mb-3 ">
//                     <label for="InputName" className="form-label"></label>
//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputName"
//                       aria-describedby="titleHelp"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="Name"
//                     />
//                   </div>

//                   <div className="mb-3 ">
//                     <label for="InputEmail" className="form-label"></label>
//                     <input
//                       type="text"
//                       className="form-control border-primary"
//                       id="InputEmail"
//                       aria-describedby="titleHelp"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Email"
//                     />
//                   </div>

//                   <div className="mb-3 ">
//                     <label
//                       for="InputPhoneNumber"
//                       className="form-label"
//                     ></label>
//                     <input
//                       type="phone number"
//                       className="form-control border-primary"
//                       id="InputPhoneNumber"
//                       aria-describedby="titleHelp"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                       placeholder="Phone Number"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label
//                       for="exampleInputDetail"
//                       className="form-label"
//                     ></label>
//                     <textarea
//                       className="form-control border-primary"
//                       id="message"
//                       rows="3"
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                       placeholder="Send a message"
//                     ></textarea>
//                   </div>
//                   <div className="col-12 mb-3">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="gridCheck"
//                       />
//                       <label className="form-check-label" for="gridCheck">
//                         Click to Suscribe to our Newsletter
//                       </label>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <SubmitFormBtn />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
