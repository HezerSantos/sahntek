import computerTestImage from '../../assets/images/computerImage.PNG'
import ComputerColorButton from './ComputerColorButton'
const ComputerByIdHeader = () => {
    return(
        <>
            <header className="background__primary computer__by__id__header">
                <div className='cXid__header'>
                    <img src={computerTestImage} alt="" />
                    <div>
                        <h1>Custom Performance Desktop PC - Micro Atx Tower</h1>
                        <p>
                            This compact performance desktop is built in a durable Micro-ATX tower chassis by MSI, designed to deliver reliable airflow and efficient internal organization. It features a high-end graphics card paired with a Micro-ATX motherboard, offering strong support for demanding applications, multitasking, and modern gaming workflows.
                            <br />
                            <br />
                            The system’s compact form factor makes it ideal for users seeking powerful hardware in a space-efficient design. With support for future upgrades, modern connectivity, and a clean internal layout, this build is suitable for a wide range of performance-focused tasks in both home and professional settings.
                        </p>

                        <p>
                            Color: <strong>White</strong>
                        </p>
                        <div>
                            <ComputerColorButton />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ComputerByIdHeader