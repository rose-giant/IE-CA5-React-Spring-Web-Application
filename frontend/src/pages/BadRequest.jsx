import { useNavigate } from "react-router-dom"

export default function BadRequestPage() {
    const navigate = useNavigate()
    return (
        <>
            <section >
                <div>
                    <img className="err-image" src="/errors/400.png" />
                    <p className="err-msg">Bad Request</p>
                </div>
                <button className="center-btn" onClick={() => navigate("/")}>
                    Return
                </button>
            </section>

        </>
    )
}


