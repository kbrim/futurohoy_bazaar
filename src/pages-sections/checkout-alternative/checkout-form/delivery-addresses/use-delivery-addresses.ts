import { useState } from "react";
// CUSTOM DATA MODEL
import { DeliveryAddress } from "models/Common";

export default function useDeliveryAddresses() {
  const [openModal, setOpenModal] = useState(false);
  const [editDeliveryAddress, setEditDeliveryAddress] =
    useState<DeliveryAddress | null>(null);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleDeleteDeliveryAddress = (id: number) => {
    const res = window.confirm("Are you sure you want to delete this address?");
    if (!res) return;
  };

  const handleAddNewAddress = () => {
    setEditDeliveryAddress(null);
    handleOpenModal();
  };

  const handleEditDeliveryAddress = (address: DeliveryAddress) => () => {
    setEditDeliveryAddress(address);
    handleOpenModal();
  };

  return {
    openModal,
    editDeliveryAddress,
    handleOpenModal,
    handleCloseModal,
    handleAddNewAddress,
    handleEditDeliveryAddress,
    handleDeleteDeliveryAddress,
  };
}
