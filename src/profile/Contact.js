import "./Contact.css";
import Input from './Input';
import Textarea from './Textarea'
export default function Contact(){
    return (
       <>
      
         <div className="contact_items" id="contact">
          <h1>Testimonial</h1>
           <div className="form_style">
             <img src="woman-4702060_960_720.webp" alt="ddfdf" width="100%" />
              <div className="back_color">
                  .
              </div>
              <div className="form">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                     
                      <Input type={'text'} name={'user_name'} place={"Full Name"}  />
                    </div>
                    <div className="col-md-6">
                      <Input type={'email'} name={'email'} place={"Your Email"} />
                    </div>

                    <div className="col-md-6 mt-3">
                      <Input type={'phone'} name={'phone'} place={"Your Phone Number"} />
                    </div>

                    <div className="col-12 mt-4">
                      <Textarea name={'message'} place={"Your Message"} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
         </div>
        
       </>

    )
}