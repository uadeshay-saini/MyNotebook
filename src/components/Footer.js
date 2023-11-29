import React from 'react'
import { Link} from "react-router-dom";
const Footer = () => {
  return (
    <div>
<footer className="relative bg-gray-800 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-gray-200">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-gray-200">
          Find us on any of these platforms.
        </h5>


        <div className="mt-6 lg:mb-0 mb-6 flex items-center">
  <div className='fab-container mr-4'>
    <a target="_blank" href="https://www.linkedin.com/in/uadeshay-saini" title="LinkedIn">
      <div className='fab shadow-lg font-normal' role="button">
      <svg viewBox="0 0 48 48" width="38px" height="38px"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>
      </div>
    </a>
  </div>
  <div className='fab-container'>
    <a target="_blank" href="https://www.github.com/uadeshay-saini" title="GitHub">
      <div className='fab shadow-lg font-normal' role="button">
      <svg viewBox="0 0 64 64" width="38px" height="38px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/></svg>
      </div>
    </a>
  </div>
</div>

       
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-gray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/about">About Us</Link>
              </li>
          
              <li>

                {/* add github profile link */}
                <a className="text-gray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm" target="_blank" href="https://www.github.com/uadeshay-saini/MyNotebook">Github React Frontend Repo</a>
              </li>
              <li>

                {/* add github profile link */}
                <a className="text-gray-200 hover:text-blueGray-800 font-semibold block pb-2 text-sm" target="_blank" href="https://www.github.com/uadeshay-saini/MyNotebook-Backend">Github Node Backend Repo</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-200 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span> Uadeshay Saini
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer