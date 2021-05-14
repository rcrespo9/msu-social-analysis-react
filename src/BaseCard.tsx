import React from "react"

interface BaseCardProps {
  header?: string;
  children: React.ReactNode;
}

const BaseCard = ({ header, children }: BaseCardProps) => {
  return (
    <div className="card">
      {header &&
        <header className="card-header">
          <p className="card-header-title">
            { header }
          </p>
        </header>
      }
      <div className="card-content">
        { children }
      </div>
    </div>
  )
}

export default BaseCard
