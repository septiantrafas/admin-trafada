import React from 'react'

function Customer() {
  return (
    <>
      <PageTitle>
        <div className="flex justify-between">
          <div>Employee</div>
          <div className="float-right">
            <Button size="small" tag={Link} to="/app/contact/new">
              new contact
            </Button>
          </div>
        </div>
      </PageTitle>
      <hr />
      <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-3">
        <InfoCard title="Open Receivables" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Overdue Receivables" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Credit Note" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
    </>
  )
}

export default Customer
