import { createContext, useContext, useMemo, useState } from "react"

export const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const contextValue = useMemo(
    () => ({ isModalOpen, setIsModalOpen, modalContent, setModalContent }),
    [isModalOpen, setIsModalOpen, modalContent, setModalContent]
  )

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error("ModalContext must be used within an ModalProvider")
  }

  return context
}
