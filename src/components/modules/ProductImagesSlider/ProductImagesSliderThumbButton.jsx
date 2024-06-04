import React from 'react'

export const Thumb = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={'product-carousel-thumbs__slide'.concat(
        selected ? ' product-carousel-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="product-carousel-thumbs__slide__number"
      >
        {index + 1}
      </button>
    </div>
  )
}
