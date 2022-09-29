import './search.css'

export const Search = ({ number, onChange }) => {
  return (
    <div className='search-wrapper'>
      <div className='number'>{number}</div>
      <input type='search' placeholder='Filter podcasts...' onChange={onChange} />
    </div>
  )
}
