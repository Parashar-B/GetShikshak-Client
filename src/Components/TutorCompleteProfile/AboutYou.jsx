import { useState } from "react";
import { useSnackbar } from "notistack";
function AboutYou(props) {
 
  return (
    <>
       <div className="md:w-[90%] md:container md:mx-auto flex my-10 h-[60vh]">
        <div className="left md:w-1/2 md:container">
          <div className="bg-green-100 h-[60vh] rounded-md p-6 md:w-5/6 hidden md:block">
            <div className="text-2xl font-bold mb-3">For Your information</div>
            <div className="bg-green-100  leading-8  h-[45vh] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-track-green scrollbar-thumb-primary-color scrollbar-thumb-rounded-full scrollbar-h-0 ">
              <p>
                Inspite trust,establish your legitmacy and assuer future students of your professionalism.
              </p>
              <p>This is one of the first thing students will read about you,so make sure you spell and format your text weel so that it is engaging and friendly.</p>
              

              <h2 className="text-xl mt-3">Remember !</h2>
              <p>
                Your contact details or URLS should not appear in your texts.
              </p>
            </div>
          </div>
          {/* scrollbar scrollbar-w-1 scrollbar-track-green scrollbar-thumb-primary-color scrollbar-thumb-rounded-full scrollbar-h-0 */}
        </div>
        <div className="md:w-2/3">
          <div className="text-3xl font-bold mb-5 ">
            {props.title}
            <span className="text-lg"> (minimum 30 words)</span>
          </div>
          <textarea
            className="border-2 border-primary-color p-4 rounded-md w-[100%]"
            placeholder="Tell your future students who you are and why you want to share your knowledge"
            name="aboutYou"
            id=""
            cols="30"
            rows="10"
            value={props.formik.values.aboutYou}
            onChange={props.formik.handleChange}
          ></textarea>
          {(props.formik.errors.aboutYou && props.formik.touched.aboutYou) ? (<p className='text-red-500 my-4 font-bold'>{props.formik.errors.aboutYou}</p>):null}

        </div>
      </div>
    </>
  );
}

export default AboutYou;
