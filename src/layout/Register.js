import Card from 'components/Card';
import Form from 'components/Form';
import React from 'react'

export default function Register() {
    return (
      <section className="register">
        <Card isPurple>
          <h1 className="info__text fs text-white">Try it free 7 days <span>then $20/mo. thereafter</span></h1>
        </Card>

        <Card isWhite>
            <Form />
        </Card>
      </section>
    );
}
