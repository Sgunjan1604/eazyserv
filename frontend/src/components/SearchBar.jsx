import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SearchBar = (props) => {
    const navigate = useNavigate()
    const user = useSelector(state=>state.auth.user)
    const services = useSelector((state) => state.services.list)
    const [query, setQuery] = useState('')
    const [showResults, setShowResults] = useState(false)

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
    )
    const handleSelect = (serviceName) => {
        setQuery('')
        setShowResults(false)

        if (!user) {
            navigate('/login')
        } else {
            navigate(`/services/${serviceName.toLowerCase()}`)
        }
    }
    return (
        <div className={props.class}>
            <input
                type="search"
                placeholder="What service do you need?"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                    setShowResults(true)
                }}
                onMouseDown={() => setTimeout(() => setShowResults(false), 150)}
            />

            {query && showResults && (
                <div className="searchDropdown">
                    {filteredServices.length > 0 ? (
                        filteredServices.map(service => (
                            <div
                                key={service._id}
                                className="searchItem"
                                onClick={() => handleSelect(service.name)}
                            >
                                {service.name}
                            </div>
                        ))
                    ) : (
                        <div className="searchItem noResult">
                            No service found
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchBar
