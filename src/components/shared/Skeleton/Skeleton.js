import Skeleton from '@mui/material/Skeleton';

export const AppSkeleton = () => {
    const dummySkeletonArray = new Array(20).fill('skeleton');
    return <>
        {dummySkeletonArray.map((value, index) => <Skeleton 
            animation="wave" 
            key = {`${value}-${index}`}
            sx = {{padding:'1.5em'}}
        />)};
    </>
}