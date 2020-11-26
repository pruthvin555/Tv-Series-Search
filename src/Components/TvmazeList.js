import React from 'react';

const TvmazeList= ({mazeList=[]}) => {
    return (
        <div>
            {mazeList.map((data, index) => (
            <h1>{data.show.name}</h1>
            ))}
        </div>
    );
}

export default TvmazeList;