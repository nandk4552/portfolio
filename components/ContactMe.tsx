import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};
type Props = {};

function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:nandk4552@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                COntact
            </h3>

            <div className='pt-20 flex flex-col space-y-4'>
                <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                    I have got just what you need. <br />
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
                </h4>
                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+123-456-7890</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>nandk4552@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>123 Developer Lane</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full mx-auto '>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default ContactMe