import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ForumListItem from './ForumListItem';
import Link from 'next/link';

export default function ForumList({ response }) {
    return (
        <List sx={{ width: '80%', maxWidth: '100%', bgcolor: '#252529' }}>

            {response.map((post, index) => (
                <>
                    <Link href={`/forum/questions/${post.id}`} >
                        <a
                            style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}
                        >
                            <ForumListItem
                                title={post.attributes.title}
                                subtitle={post.attributes.Username}
                                paragraph={post.attributes.Questions}
                            />
                        </a>
                    </Link>
                    <Divider variant="inset" component="li" style={{ background: '#404040' }} />
                </>
            ))}

        </List >
    );
}