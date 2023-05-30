import React from 'react'

const KnowMore = () => {
  return (
    <div className='p-2'>
      <b className='text-xl text-lime-300'>Low TDS</b>
      <p>
        Water with low Total Dissolved Solids (TDS) below 50 ppm value is considered to be good for drinking as it does not contain any harmful chemicals or contaminants. However, it also lacks some essential minerals that are needed for a healthy diet. Therefore, it is important to understand the importance of TDS and how to maintain a balance between drinking water with low TDS and consuming enough minerals from other sources.
      </p>

      <br />
      <hr />
      <br />

      <b className='text-xl text-lime-300'>High TDS</b>
      <p>
        The Total Dissolved Solids (TDS) value of water is an important indicator of its quality. If the TDS value is too high above 500 ppm, it can make the water unpalatable and even unsafe to drink. On the other hand, if the TDS value is too low, it can also lead to health problems due to mineral deficiencies. Therefore, it is important to ensure that the TDS value of drinking water falls within a safe range.
      </p>
      <p>
        The presence of high Total Dissolved Solids (TDS) in drinking water can have serious health implications. High TDS levels can indicate the presence of toxic substances such as heavy metals, pesticides, and other contaminants that can cause a range of health issues. It is therefore important to ensure that drinking water has a normal TDS content before consuming it.
      </p>

      <br />
      <hr />
      <br />

      <b className='text-xl text-lime-300'>Normal TDS</b>
      <p>
        Water with a Total Dissolved Solids (TDS) value between 50 to 150 is considered excellent for drinking. This range of TDS value ensures the water contains enough minerals and salts that are beneficial for human health. It also helps to improve the taste of the water, making it more enjoyable to drink.
      </p>

      <br />
      <hr />
      <br />

      <b className='text-xl text-lime-300'>Caution</b>
      <div className='flex items-center'>
        <b>Below 50ppm: &nbsp;</b>
        <span>Fine but lack of minerals</span>
      </div>

      <div className='flex items-center'>
        <b>Between 50 to 150ppm: &nbsp;</b>
        <span>Excellent for Drinking</span>
      </div>

      <div className='flex items-center'>
        <b>Between 150 to 300ppm: &nbsp;</b>
        <span>Good for Drinking</span>
      </div>

      <div className='flex items-center'>
        <b>Above 300ppm: &nbsp;</b>
        <span>Not for Drinking</span>
      </div>

    </div>
  )
}

export default KnowMore