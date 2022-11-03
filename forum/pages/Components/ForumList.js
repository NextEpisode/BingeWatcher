import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ForumListItem from './ForumListItem';
import Link from 'next/link';

export default function ForumList({ response }) {
    return (
        <List sx={{ width: '80%', maxWidth: '100%', bgcolor: 'background.paper' }}>

            {response.map((post, index) => (
                <>
                    <Link href={`/questions/${post.id}`} >
                        <a>
                            <ForumListItem
                                title={post.attributes.title}
                                subtitle={post.attributes.Username}
                                paragraph={post.attributes.Questions}
                            />
                        </a>
                    </Link>
                    <Divider variant="inset" component="li" />
                </>
            ))}

        </List >
    );
}