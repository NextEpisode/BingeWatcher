import React, { useEffect } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react'

export const Header = () => {

  const { data: session } = useSession()


  return (
    <header>
      <div className="container">
        <div className="inner-content">

          <div className="brand">
            <Link href="/">Binge Watcher</Link>
          </div>

          {!session && (
            <>
              <ul className="nav-links">
                <li>
                  <a onClick={() => signIn()}>
                    Login
                  </a>
                </li>
                <li>
                  <Link href="/forum">Forums</Link>
                </li>
                <li>
                  <Link href="/search" className="btn btn-main">
                    Search
                  </Link>

                </li>
              </ul>
            </>
          )}

          {session && (
            <ul className="nav-links">

              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/forum">Forums</Link>
              </li>
              <li>
                <Link href="/search" className="btn btn-main">
                  Search
                </Link>
              </li>
              <li>
                <a onClick={() => signOut()}>
                  Logout
                </a>
              </li>
            </ul>
          )}

        </div>
      </div>
    </header>
  );
};

