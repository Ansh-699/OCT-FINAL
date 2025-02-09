"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { format, subDays } from "date-fns"
import { DateRange } from "react-day-picker"

export function DateRangeSelector({ onDateChange }: { onDateChange: (range: { from: Date; to: Date }) => void }) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  const handleSelectDate = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      setDateRange(range)
      onDateChange({ from: range.from, to: range.to })
    }
  }

  const setQuickRange = (days: number) => {
    const from = subDays(new Date(), days)
    const to = new Date()
    setDateRange({ from, to })
    onDateChange({ from, to })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="btn btn-primary rounded-pill">
          {dateRange?.from && dateRange?.to
            ? `${format(dateRange.from, "MMM dd, yyyy")} - ${format(dateRange.to, "MMM dd, yyyy")}`
            : "Select Date Range"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="card shadow-lg">
        <div className="card-content">
          <div className="card-body">
            <Calendar mode="range" selected={dateRange} onSelect={handleSelectDate} />
            <div className="buttons mt-3 d-flex gap-2">
              <Button 
                onClick={() => setQuickRange(7)} 
                className="btn btn-sm btn-outline-primary rounded-pill"
              >
                Last Week
              </Button>
              <Button 
                onClick={() => setQuickRange(30)} 
                className="btn btn-sm btn-outline-primary rounded-pill"
              >
                Last Month
              </Button>
              <Button 
                onClick={() => setQuickRange(365)} 
                className="btn btn-sm btn-outline-primary rounded-pill"
              >
                Last Year
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
