import { Checkbox } from '@material-ui/core';
import { message } from 'antd';

import { axiosWithAuth } from '../../../../../../api/axiosWithAuth';

export default function StillHoused9MonthsCheckbox({ nineMonths, requestId }) {
  const onCheckboxChange = async e => {
    const { checked } = e.target;

    try {
      await axiosWithAuth().put(`/requests/${requestId}`, {
        nineMonths: checked,
      });
    } catch (error) {
      message.error('Unable to persist checkbox changes. Please report this');
    }
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Checkbox
        onChange={onCheckboxChange}
        defaultChecked={nineMonths}
        style={{ padding: '0.6rem' }}
      />
    </div>
  );
}