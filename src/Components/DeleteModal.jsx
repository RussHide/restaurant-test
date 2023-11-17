import Modal from 'antd/es/modal'
import toast from "react-hot-toast";
import { YXV0aENvbnRyYXNlbmFVc3Vhcmlv } from '../helpers';
import { BiTrash } from 'react-icons/bi';
import { PiWarningCircleBold } from 'react-icons/pi';

const DeleteModal = ({ modal, setModal, fetchData, succesText, getFiltersData }) => {

    const btnDelete = async () => {
        try {
            await fetch(`http://18.117.237.107:8080/dash2023/restaurant/api/?deleteCount=${modal.delete.id}`, { headers: { 'Authorization': YXV0aENvbnRyYXNlbmFVc3Vhcmlv } })
            getFiltersData()
            fetchData()
            setModal({ add: { open: false }, edit: { open: false, row: {} }, delete: { open: false, id: '' } })
            toast.success(succesText, { position: 'top-right', duration: 2500 })
        } catch (error) {
            console.log(error);
            toast.error('Hubo un error interno, consulta con un administrador', { position: 'top-right', duration: 2500 })
        }
    }

    return (
        <Modal footer={[
            <div key={10} className="flex justify-around items-center my-2 p-4">
                <button onClick={() => setModal({ add: { open: false }, edit: { open: false, row: {} }, delete: { open: false, id: '' } })} className="mr-1 bg-red-400 hover:bg-red-600 text-white px-8 md:px-14 py-2 rounded-md font-semibold">Cancelar</button>
                <button className=' bg-green-400 hover:bg-green-600 text-white px-8 md:px-14 py-2 rounded-md font-semibold' onClick={btnDelete}>Confirmar</button>
            </div>
        ]} className="md:min-w-fit" open={modal.delete.open} onOk={btnDelete} onCancel={() => setModal({ add: { open: false }, edit: { open: false, row: {} }, delete: { open: false, id: '' } })}>
            <div className="text-center p-5 flex-auto justify-center">
                <div className='flex flex-col justify-center items-center w-full'>
                    <PiWarningCircleBold className='text-red-500' />
                    <BiTrash className='text-red-500' size={110} />
                </div>
                <h2 className="text-xl font-bold py-4 ">¿Estás seguro?</h2>
                <p className="text-lg text-gray-700 px-8 ">¿Realmente quieres eliminar este registro? No se podrá recuperar</p>
            </div>
        </Modal>
    )
}


export default DeleteModal