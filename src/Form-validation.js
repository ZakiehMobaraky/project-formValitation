import React from 'react';
import { useForm } from 'react-hook-form';

const FormValidation = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (

    <div>
       <form>

        <div>
          <h2>احراز هویت</h2>
        </div>

        <div>
          <label>نام</label>
          <input placeholder='نام را وارد کنید' {...register("name",{required:true})}/>
          <error>
            {errors.name?.type === "required" && "نام اجباری می باشد "}
          </error>
        </div>

        <div>
          <label>نام خانوادگی</label>
          <input placeholder='نام خانوادگی را وارد کنید' {...register("lastname",{required : true})}/>
          <error>
            {errors.lastname?.type === "required" && "نام خانوادگی اجباری می باشد"}
          </error>
        </div>

        <div>
          <label>ایمیل</label>
          <input placeholder='ایمیل را وارد کنید' {...register("email",
          {required:true,
          pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}/>
          <error>
            {errors.email?.type === "required" && "ایمیل اجباری می باشد"}
            {errors.email?.type === "pattern" && "ایمیل صحیح وارد کنید"}
          </error>
        </div>

        <div>
          <label>تلفن</label>
          <input placeholder='شماره تلفن را وارد کنید' {...register("phone",{required:true,
           pattern:/^09[0|1|2|3][0-9]{8}$/ })}/>

           <error>
            {errors.phone?.type === "required" && "شماره موبایل اجباری می باشد"}
            {errors.phone?.type === "pattern" && "شماره موبایل صحیح وارد کنید"}
           </error>
          
        </div>

        <div>
          <label>رمز عبور</label>
          <input type='password' {...register("password",{required:true ,minLength:6, maxLength:12})}/>
          <error>
            {errors.password?.type === "minLength" && "کمتر از 6 کاراکتر وارد شده است"}
            {errors.password?.type === "maxLength" && "بیشتر از 12 کاراکتر وارد شده است"}
          </error>
        </div>

        <div>
          <input type='submit' className='button'/>
        </div>
       </form>
    </div>);
}

export default FormValidation;

// .................................

// import React from "react";
// import { useForm } from "react-hook-form";

// const FormValidation = () => {
    
//     const { register, formState: { errors }, handleSubmit } = useForm();

//     const onSubmit = (data) => console.log(data);
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <h1>Registration</h1>
//                 </div>
//                 <div>
//                     <label>Name</label>
//                     <input placeholder='Enter person name' {...register("name", { required: true })} />

//                     <error>
//                         {errors.name?.type === "required" && "Name is required"}
//                     </error>
//                 </div>

//                 <div>
//                     <label>Email</label>
//                     <input placeholder="Enter primary email" {...register("email", {
//                         required: true,
//                         pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
//                     })} />

//                     <error>
//                         {errors.email?.type === "required" && "Email is required"}
//                         {errors.email?.type === "pattern" && "Entered email is in wrong format"}
//                     </error>
//                 </div>

//                 <div>
//                     <label>Phone Number</label>
//                     <input type='number' {...register("number", { minLength: 6, maxLength: 12, })} />

//                     <error>
//                         {errors.number?.type === "minLength" && "Enter number is more than 12 digits"}
//                     </error>
//                 </div>

//                 <div>
//                     <label>Password</label>
//                     <input placeholder='Enter password' {...register("password", {
//                         required: true,
//                         minLength: 5,
//                         maxLength: 20,
//                     })} />

//                     <error>
//                         {errors.password?.type === "minLength" && "Entered password is less than 5 characters"}
//                         {errors.password?.type === "maxLength" && "Entered password is more than 20 characters"}
//                     </error>
//                 </div>


//                 <div>
//                     <input className='button' type='submit' />
//                 </div>
//             </form>
//         </div>);

// }

// export default FormValidation;