import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
function FilterByPrice({ handleChangePriceFilters }) {
  return (
    <div style={{ border: '1px solid lightgray', borderTop: 'none' }} className='product-filter-price'>
      <p className='b-gray box-background' style={{ padding: '10px 20px', fontWeight: 'bold', color: 'white' }}>BỘ LỌC</p>
      <div style={{ padding: '0 0 0 17px' }}>
        <p style={{ fontWeight: 'bold' }}>Tìm theo mức giá</p>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            row
            onChange={(event) => handleChangePriceFilters(+event.target.value)}
          >
            <div className="d-flex flex-column">
              <FormControlLabel value="1" control={<Radio />} label="Tất cả" />
              <FormControlLabel value="2" control={<Radio />} label="100.000đ - 200.000đ" />
              <FormControlLabel value="3" control={<Radio />} label="200.000đ - 300.000đ" />
              <FormControlLabel value="4" control={<Radio />} label="300.000đ - 400.000đ" />
              <FormControlLabel value="5" control={<Radio />} label="500.000đ - 1.000.000đ" />
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    </div >
  )
}

export default FilterByPrice