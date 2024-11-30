import { useRouteError } from "react-router";
import Navbar from "../../shared/Navbar/Navbar";

export default function ErrorHandler() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Navbar />
            <div id="error-page">
                <div className="raper-div mt-20 w-4/5 mx-auto">
                    {/* <h1>Oops!</h1>
                    <p>
                        This page is not created yet, Please wait somtimes and
                        try again...💕🤷‍♀️
                    </p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p> */}
                    <div role="alert" class="alert alert-warning">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <span>
                            <h1>Oops!</h1>
                            <p>
                                This page is not created yet, Please wait
                                somtimes and try again...💕🤷‍♀️
                            </p>
                            <p>
                                <i>{error.statusText || error.message}</i>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
