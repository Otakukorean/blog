import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

type PaginationProps = {
    page ?:string;
    totalPages : number;
    hasNextPage : boolean;
}

const Pagination = (props : PaginationProps) => {
    const {hasNextPage,totalPages,page = 1} = props;
    const currentPage = Math.min(Math.max(Number(page), 1), totalPages);



  return (
    <div className="flex items-center justify-center space-x-6 text-black">
            {
                !hasNextPage && page !== 1 ? (
                    <Link
                
                    className={cn(
                        'rounded-md bg-white border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
                        currentPage === 1 ? 'pointer-events-none bg-gray-100' : '',
                    )}
                    href={`?page=${currentPage - 1}`}
                >
                    Previous
                </Link>
                ) : null
            }
		
            {
                hasNextPage && (
                    <Link   
                    className={cn(
                        'rounded-md bg-white border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
                        !hasNextPage ? 'pointer-events-none bg-gray-100' : '',
                    )}
                    href={`?page=${currentPage + 1}`}
                >
                    Next
                </Link>
                )   
            }
		
		</div>
  )
}

export default Pagination