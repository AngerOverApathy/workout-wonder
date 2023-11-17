import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt='logo' src={Logo} />
                <p className='my-5'>
                Embrace the path to wellness and unlock your potential at our state-of-the-art gym. 
                Our dedicated trainers and top-notch facilities are here to guide you towards a stronger, healthier you. 
                Join our fitness community today and take the first step towards a brighter, more active future.
                </p>
                <p>
                © 2023 Atlas Athletics. All rights reserved.
                </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Instagram</p>
                <p className='my-5'>Facebook</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Phone Number: 619-345-9080</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer