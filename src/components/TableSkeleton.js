
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
const TableSkeleton = ({counts}) => {

    return (
        Array(counts).fill(0).map((item,i)=><SkeletonTheme baseColor="#202020" highlightColor="#444" key={i}>
        <tr>
                <td><div className='table-skeleton'><div className='coinimg'><Skeleton circle height={'100%'}/></div><div style={{width:'50%',marginLeft:'5px'}}><Skeleton /></div></div>
                 </td>
                 <td>
                 <div className='table-skeleton'><div className='tblcol1'><Skeleton/></div></div>
                </td>
                <td>
                <div className='table-skeleton'><div className='tblcol2'><Skeleton/></div></div>
                 </td>
                 <td>
                 <div className='table-skeleton'><div className='tblcol3'><Skeleton/></div></div>
                 </td>
                 <td>
                 <div className='table-skeleton'><div className='tblcol3'><Skeleton/></div></div>
                 </td>
                 <td style={{'maxWidth':'150px','marginRight':'0px'}}>
                  <div className='table-skeleton'>
                  <div className='tblcol4'><Skeleton width={'70%'} height={'90%'}/></div>
                 </div>
                 </td>
                 </tr>
                 </SkeletonTheme>)
        
    )
}
export default TableSkeleton