import React from "react";
import { useForm } from "react-hook-form";
// کامل ترین نمونه فرم ورود اطلاعات

const FormValidation = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1>احراز هویت</h1>
                </div>
                <div>
                    <label>نام</label>
                    <input placeholder='نام را وارد کنید' {...register("name", { required: true })} />

                    <error>
                        {errors.name?.type === "required" && "نام اجباری می باشد"}
                    </error>
                </div>

                <div>
                    <label>نام خانوادگی</label>
                    <input placeholder='نام خانوادگی را وارد کنید' {...register("lastname", { required: true })} />
                    <error>
                        {errors.lastname?.type === "required" && "نام خانوادگی اجباری می باشد"}
                    </error>
                </div>

                <div>
                    <label>ایمیل</label>
                    <input placeholder="ایمیل را وارد کنید" {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                    })} />

                    <error>
                        {errors.email?.type === "required" && "ایمیل اجباری می باشد"}
                        {errors.email?.type === "pattern" && "ایمیل درست وارد کنید"}
                    </error>
                </div>

                <div>
                    <label>تلفن</label>
                    <input placeholder='شماره تلفن را وارد کنید' {...register("phone", {
                        required: true,
                        pattern: /^09[0|1|2|3][0-9]{8}$/
                    })} />

                    <error>
                        {errors.phone?.type === "required" && "شماره موبایل اجباری می باشد"}
                        {errors.phone?.type === "pattern" && "شماره موبایل صحیح وارد کنید"}
                    </error>

                </div>

                <div>
                    <label>رمز عبور</label>
                    <input type='password' {...register("password", { required: true, minLength: 6, maxLength: 12 })} />
                    <error>
                        {errors.password?.type === "minLength" && "کمتر از 6 کاراکتر وارد شده است"}
                        {errors.password?.type === "maxLength" && "بیشتر از 12 کاراکتر وارد شده است"}
                    </error>
                </div>


                <div>
                    <button className="button">ثبت</button>
                </div>
            </form>
        </div>);

}

export default FormValidation;