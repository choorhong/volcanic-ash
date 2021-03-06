import React, { useEffect, useState } from 'react'
import Nav from '../../layout/Nav'
import PurchaseOrder from '../../components/purchaseOrder'
import CreatePurchaseOrder from '../../components/purchaseOrder/create'
import axios from 'axios'

const { REACT_APP_BASE_URL: baseUrl } = process.env

const PurchaseOrderPage: React.FC = (props) => {
  const [orders, setOrders] = useState<any[]>([])

  useEffect(() => {
    (async () => {
      const result = await axios.get(`${baseUrl}/purchase-order`)
      if (result && result.data) {
        setOrders(result.data)
      }
    }
    )()
  }, [])

  return (
    <Nav>
      <CreatePurchaseOrder onSetOrder={setOrders} />
      <PurchaseOrder orders={orders} />
    </Nav>
  )
}

export default PurchaseOrderPage
