import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const Contact = () => {
      // State variables for form fields
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

      const url = process.env.REACT_APP_API_URL
      // Function to handle form submission
      const handleSubmit = async (e) => { // Mark function as async
        e.preventDefault(); // Prevent default form submission behavior

        // Simple validation: Name and Message are required
        if (!name || !message) {
            setError('Please fill in your Name and Message.');
            return;
            }

        // Email validation (only if email is provided)
        if (email && !/\S+@\S+\.\S/.test(email)) { // Added missing part of regex for email validation
            setError('Please enter a valid email address, or leave it blank.');
            return;
            }

        setError(''); // Clear any previous errors
        setIsLoading(true); // Set loading to true when submission starts

        try {
          const response = await axios.post(url + '/api/v1/website/contact', {
           name:name,
           email:email,
           message:message,
          });

          const data = response.data;

          console.log('Form Submitted Successfully!', data);
          setIsSubmitted(true); // Set submission success

          // Optionally clear the form after successful submission
          setName('');
          setEmail('');
          setMessage('');

        } catch (err) {
          console.error('Error submitting form:', err);
          setError(`Failed to send message: ${err.message || 'An unknown error occurred.'}`);
          setIsSubmitted(false); // Ensure success message isn't shown on error
        } finally {
          setIsLoading(false); // Always reset loading state
        }
      };

      return (
        <Box
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(to right, #e0f2f7, #e8eaf6)', // Blue-50 to Indigo-100 gradient
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          <Paper
            elevation={10}
            style={{
              borderRadius: '1rem',
              width: '100%',
              maxWidth: '80rem', // Increased max-width
              border: '1px solid #90caf9', // Light blue border
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column', // Default to column for small screens
            }}
          >
            <Grid container>
              {/* Left Section: Picture Placeholder */}
              <Grid
                item
                xs={12} // Full width on small screens
                md={6}   // Half width on medium and larger screens
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  backgroundColor: '#e3f2fd', // Blue-50
                }}
              >
                <img
                  src="https://i.imgur.com/qOHopQ6.jpg"
                  alt="Wilbert with Hulk"
                  style={{
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    height: 'auto',
                    maxHeight: '24rem', // max-h-96
                    objectFit: 'cover'
                  }}
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/C0DAF7/FFFFFF?text=Image%20Error"; }}
                />
              </Grid>

              {/* Right Section: Contact Form */}
              <Grid
                item
                xs={12} // Full width on small screens
                md={6}   // Half width on medium and larger screens
                style={{ padding: '2rem' }}
              >
                <Typography
                  variant="h3" // Equivalent to h1, but provides more flexibility
                  component="h1"
                  align="center"
                  gutterBottom // Adds bottom margin
                  style={{
                    fontWeight: 800, // font-extrabold
                    color: '#424242', // gray-800
                    marginBottom: '2rem',
                    letterSpacing: '-0.025em' // tracking-tight
                  }}
                >
                  Contact me
                </Typography>

                {isSubmitted ? (
                  <Box
                    style={{
                      textAlign: 'center',
                      backgroundColor: '#f1f8e9', // green-50
                      border: '1px solid #a5d6a7', // green-200
                      color: '#388e3c', // green-700
                      padding: '1.5rem',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <svg
                      style={{
                        width: '3rem', // w-12
                        height: '3rem', // h-12
                        color: '#4caf50', // green-500
                        marginBottom: '1rem', // mb-4
                        animation: 'bounce 1s infinite' // animate-bounce
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <Typography variant="h5" component="p" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      Thank You!
                    </Typography>
                    <Typography variant="body1" component="p">
                      Your message has been sent successfully.
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => setIsSubmitted(false)}
                      style={{
                        marginTop: '1.5rem', // mt-6
                        padding: '0.75rem 1.5rem', // px-6 py-3
                        backgroundColor: '#1976d2', // blue-600
                        color: '#fff',
                        fontWeight: 600, // font-semibold
                        borderRadius: '0.5rem', // rounded-lg
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-md
                        transition: 'background-color 0.3s, transform 0.3s',
                        '&:hover': {
                          backgroundColor: '#1565c0', // blue-700
                          transform: 'scale(1.05)',
                        }
                      }}
                    >
                      Send Another Message
                    </Button>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}> {/* space-y-6 */}
                    {error && (
                      <Typography
                        style={{
                          color: '#d32f2f', // red-600
                          backgroundColor: '#ffebee', // red-100
                          border: '1px solid #ef9a9a', // red-300
                          padding: '0.75rem', // p-3
                          borderRadius: '0.5rem', // rounded-lg
                          fontSize: '0.875rem', // text-sm
                          textAlign: 'center'
                        }}
                      >
                        {error}
                      </Typography>
                    )}

                    <TextField
                      label="Your Name"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      variant="outlined"
                      fullWidth
                      required // Mark as required for visual asterisk
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: '1rem', fontWeight: 500, color: '#424242' }
                      }}
                      InputProps={{
                        style: { borderRadius: '0.5rem' }
                      }}
                      FormHelperTextProps={{
                         style: { color: '#d32f2f' }
                      }}
                    />

                    <TextField
                      label="Your Email (Optional)"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: '1rem', fontWeight: 500, color: '#424242' }
                      }}
                      InputProps={{
                        style: { borderRadius: '0.5rem' }
                      }}
                    />

                    <TextField
                      label="Your Message"
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={5}
                      required // Mark as required for visual asterisk
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: '1rem', fontWeight: 500, color: '#424242' }
                      }}
                      InputProps={{
                        style: { borderRadius: '0.5rem' }
                      }}
                      FormHelperTextProps={{
                         style: { color: '#d32f2f' }
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={isLoading}
                      style={{
                        backgroundColor: '#3f51b5', // indigo-600
                        color: '#fff',
                        fontWeight: 'bold',
                        padding: '0.75rem 0', // py-3
                        borderRadius: '0.5rem', // rounded-lg
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-lg
                        transition: 'background-color 0.3s, transform 0.3s',
                        '&:hover': {
                          backgroundColor: '#303f9f', // indigo-700
                          transform: 'scale(1.05)',
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isLoading ? (
                        <svg className="animate-spin" style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Box>
      );
    };

    export default Contact