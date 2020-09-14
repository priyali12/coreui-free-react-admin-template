import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CInputGroup,
  CInputGroupPrepend,
  CInput,
  CForm,
  CFormGroup,
  CInputGroupAppend,
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))


const DoctorDashboard = () => {
  return (

    <>
      <CCol xs="12" md="10">
        <CCard className="align-items-center">
          <CCardHeader>
            Button Groups
            </CCardHeader>
          <CCardBody >
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row >
                <CCol md="22" >
                  <CInputGroup >
                    <CInputGroupPrepend >
                      <CButton type="button" color="primary" md="10"><CIcon name="cil-magnifying-glass" /> Search</CButton>
                    </CInputGroupPrepend >
                    <CInput id="input1-group2" name="input1-group2" placeholder="Patient Code"  />
                  </CInputGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Patient Name: </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">Username</p>
                  </CCol>
                  <CCol md="3">
                    <CLabel>Contact No.</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <p className="form-control-static">7894561231</p>
                  </CCol>
                </CFormGroup>
              
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCardBody>
        <CRow className="align-items-center mt-3">
          <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
            <CButton block color="info">Manage Medicine</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </>
  )
}

export default DoctorDashboard