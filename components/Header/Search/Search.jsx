import { useRef } from 'react';
import { useRouter } from 'next/router';

import SearchIcon from '@mui/icons-material/Search';

import { Box, TextField, InputAdornment } from '@mui/material';

const Search = () => {
  const searchInputRef = useRef();

  const router = useRouter();

  const onSearchFormSubmit = (e) => {
    e.preventDefault();

    router.push(`/search/${searchInputRef.current.value}`);
  };

  return (
    <Box>
      <form onSubmit={onSearchFormSubmit}>
        <TextField
          sx={{ backgroundColor: '#e2e8f0', borderRadius: '0.5rem', color: '#718096', padding: '0.5rem' }}
          variant="standard"
          fullWidth
          id="input-with-icon-textfield"
          placeholder="Search for posts, files..."
          inputRef={searchInputRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            disableUnderline: true, // <== added this
          }}
        />
      </form>
    </Box>
  );
};

export default Search;
