import { Card, CardContent } from "../ui/card"
import { Skeleton } from "../ui/Skeleton"

function LoadingContainer() {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <LoadingProduct key={i} />
      ))}
    </div>
  )
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full rounded-t-lg" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="flex justify-between items-center mt-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}

export default LoadingContainer