import Card from 'components/Card';
import Form from 'components/Form';
import React from 'react'

export default function Register() {
    return (
      <section className="register">
        <Card isPurple>
          <p className="info__text fs text-white">Try it free 7 days <span>then $20/mo. thereafter</span></p>
        </Card>

        <Card isWhite>
            <Form />
        </Card>
      </section>
    );
}
